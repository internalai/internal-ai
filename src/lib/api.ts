// Mock API functions for demonstration
export const getPosts = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    {
      id: 1,
      user_name: "А. Бат-Эрдэнэ",
      user_avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      content: "Өдрийн бүртгэл амжилттай болж байна. Бүх албан тушаалтан цагийн хуваарийг мөрдөж байна.",
      image_url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
      likes_count: 15,
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      user_name: "С. Цэцэг",
      user_avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      content: "Сайн байна уу? Энэ долоо хоногт манай нэгжийн бэлтгэл ажил амжилттай явагдаж байна.",
      likes_count: 8,
      created_at: new Date(Date.now() - 3600000).toISOString()
    },
    {
      id: 3,
      user_name: "Б. Ганбаяр",
      user_avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      content: "Шинэ дүрэм журмын талаар мэдээлэл. Бүх ажилтан уншиж ойлгосон байх ёстой.",
      likes_count: 12,
      created_at: new Date(Date.now() - 7200000).toISOString()
    }
  ];
};

export const createPost = async (content: string, imageUrl?: string) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const newPost = {
    id: Date.now(),
    user_name: "А. Бат-Эрдэнэ",
    user_avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    content,
    image_url: imageUrl,
    likes_count: 0,
    created_at: new Date().toISOString()
  };
  
  return [newPost];
};

export const signIn = async (email: string, password: string) => {
  // Mock authentication - accept any email/password combination for demo
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    user: {
      id: 'mock-user-id',
      email,
      user_metadata: {
        full_name: 'А. Бат-Эрдэнэ',
        rank: 'Ахмад'
      }
    }
  };
};