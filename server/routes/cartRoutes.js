import express from "express";
import Cart from "../models/Cart.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.use(auth); // neeche ke sab routes protected hain

const getCart = async (userId) =>
  (await Cart.findOne({ user: userId })) ||
  (await Cart.create({ user: userId, items: [] }));

// GET /api/cart
router.get("/", async (req, res) => {
  const cart = await getCart(req.userId);
  res.json(cart.items);
});

// POST /api/cart/add   body: { productId, title, price, image, quantity }
router.post("/add", async (req, res) => {
  const { productId, title, price, image, quantity = 1 } = req.body;
  const cart = await getCart(req.userId);

  const item = cart.items.find((i) => i.productId === String(productId));
  if (item) item.quantity += quantity;
  else
    cart.items.push({
      productId: String(productId),
      title,
      price,
      image,
      quantity,
    });

  await cart.save();
  res.json(cart.items);
});

// PUT /api/cart/update   body: { productId, quantity }
router.put("/update", async (req, res) => {
  const { productId, quantity } = req.body;
  const cart = await getCart(req.userId);
  const item = cart.items.find((i) => i.productId === String(productId));
  if (item && quantity > 0) item.quantity = quantity;
  await cart.save();
  res.json(cart.items);
});

// DELETE /api/cart/remove/:productId
router.delete("/remove/:productId", async (req, res) => {
  const cart = await getCart(req.userId);
  cart.items = cart.items.filter((i) => i.productId !== req.params.productId);
  await cart.save();
  res.json(cart.items);
});

// DELETE /api/cart/clear
router.delete("/clear", async (req, res) => {
  const cart = await getCart(req.userId);
  cart.items = [];
  await cart.save();
  res.json([]);
});

export default router;
