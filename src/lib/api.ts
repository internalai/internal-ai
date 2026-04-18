import { supabase } from "@/integrations/supabase/client";

// Auth functions
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) throw error;
  return data;
};

export const signUp = async (email: string, password: string, full_name: string, rank: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name,
        rank,
      },
    },
  });
  
  if (error) throw error;
  return data;
};

// Post functions
export const getPosts = async () => {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      profiles:user_id (
        username,
        avatar_url
      )
    `)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

export const createPost = async (content: string, imageUrl?: string) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  const { data, error } = await supabase
    .from('posts')
    .insert([
      { 
        user_id: user.id, 
        content, 
        image_url: imageUrl 
      }
    ]);
  
  if (error) throw error;
  return data;
};