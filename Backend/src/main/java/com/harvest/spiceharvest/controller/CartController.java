package com.harvest.spiceharvest.controller;

import com.harvest.spiceharvest.model.CartItem;
import com.harvest.spiceharvest.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173") // Allow frontend access
public class CartController {

    private final CartService cartService;

    @GetMapping
    public ResponseEntity<List<CartItem>> getCartItems(@RequestParam @NonNull String sessionId) {
        return ResponseEntity.ok(cartService.getCartItems(sessionId));
    }

    @PostMapping("/add")
    public ResponseEntity<CartItem> addToCart(@RequestBody Map<String, Object> payload) {
        String sessionId = (String) payload.get("sessionId");
        Object productIdObj = payload.get("productId");
        Object quantityObj = payload.get("quantity");

        if (sessionId == null || productIdObj == null || quantityObj == null) {
            throw new IllegalArgumentException("Missing required fields");
        }

        Long productId = Objects.requireNonNull(Long.valueOf(productIdObj.toString()));
        Integer quantity = Objects.requireNonNull(Integer.valueOf(quantityObj.toString()));

        return ResponseEntity.ok(cartService.addToCart(sessionId, productId, quantity));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeFromCart(@PathVariable @NonNull Long id) {
        cartService.removeFromCart(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/clear")
    public ResponseEntity<Void> clearCart(@RequestParam @NonNull String sessionId) {
        cartService.clearCart(sessionId);
        return ResponseEntity.ok().build();
    }
}
