import { supabase } from "../lib/supabase";

// Get Products
export async function getProducts() {
  return await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: false });
}

// Add Product
export async function addProduct(product) {
  return await supabase
    .from("products")
    .insert([product])
    .select();
}

// Delete Product
export async function deleteProduct(id) {
  return await supabase
    .from("products")
    .delete()
    .eq("id", id);
}

// Update Product
export async function updateProduct(id, product) {
  return await supabase
    .from("products")
    .update(product)
    .eq("id", id)
    .select();
}