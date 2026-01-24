interface getParams {
  isFeatured?: boolean;
  search?: string;
}

export const blogService = {
  getAllBlogs: async function (params?: getParams) {
    try {
      const url = new URL("http://localhost:5000/posts");

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value != null && value != undefined && value != "") {
            url.searchParams.append(key, value);
          }
        });
      }
      const res = await fetch(url.toString(), { cache: "no-store" });

      const data = await res.json();

      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },
  getBlogsById: async function (id: string) {
    try {
      const url = new URL(`http://localhost:5000/posts/${id}`);

      const res = await fetch(url.toString());

      const data = await res.json();
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  },
};
