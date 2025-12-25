package com.harvest.spiceharvest.service;

import com.harvest.spiceharvest.model.CartItem;
import com.harvest.spiceharvest.model.Product;
import com.harvest.spiceharvest.repository.CartItemRepository;
import com.harvest.spiceharvest.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartService {
    private final CartItemRepository cartItemRepository;
    private final ProductRepository productRepository;

    public List<CartItem> getCartItems(@NonNull String sessionId) {
        return cartItemRepository.findBySessionId(sessionId);
    }

    @Transactional
    public CartItem addToCart(@NonNull String sessionId, @NonNull Long productId, @NonNull Integer quantity) {
        Optional<CartItem> existingItem = cartItemRepository.findBySessionIdAndProductId(sessionId, productId);

        if (existingItem.isPresent()) {
            CartItem item = existingItem.get();
            item.setQuantity(item.getQuantity() + quantity);
            return cartItemRepository.save(item);
        } else {
            Product product = productRepository.findById(productId)
                    .orElseThrow(() -> new RuntimeException("Product not found"));
            CartItem newItem = new CartItem();
            newItem.setProduct(product);
            newItem.setQuantity(quantity);
            newItem.setSessionId(sessionId);
            return cartItemRepository.save(newItem);
        }
    }

    @Transactional
    public void removeFromCart(@NonNull Long cartItemId) {
        cartItemRepository.deleteById(cartItemId);
    }

    @Transactional
    public void clearCart(@NonNull String sessionId) {
        cartItemRepository.deleteBySessionId(sessionId);
    }
}
