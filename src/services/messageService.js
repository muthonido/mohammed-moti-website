import { supabase } from "../lib/supabase";

// Save a new message
export async function addMessage(message) {
  return await supabase
    .from("messages")
    .insert([message])
    .select();
}

// Get all messages
export async function getMessages() {
  return await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });
}

// Update message status
export async function updateMessage(id, status) {
  return await supabase
    .from("messages")
    .update({ status })
    .eq("id", id)
    .select();
}

// Delete a message
export async function deleteMessage(id) {
  return await supabase
    .from("messages")
    .delete()
    .eq("id", id);
}