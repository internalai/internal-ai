import { supabase } from './supabase';

export const getPosts = async () => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

export const createPost = async (content: string, imageUrl?: string) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Нэвтрээгүй байна');

  const { data, error } = await supabase
    .from('posts')
    .insert([
      { 
        user_id: user.id, 
        content, 
        image_url: imageUrl,
        user_name: user.user_metadata.full_name || 'Нэргүй алба хаагч',
        user_rank: user.user_metadata.rank || 'Байлдагч'
      }
    ]);

  if (error) throw error;
  return data;
};

export const signIn = async (email: string, pass: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password: pass,
  });
  if (error) throw error;
  return data;
};