const extractRepositoryName = (githubUrl: string) => {
  try {
    const parsedUrl = new URL(githubUrl as string);
    const pathParts = parsedUrl.pathname
      .split("/")
      .filter((part) => part.trim() !== "");

    if (pathParts.length >= 2) {
      return pathParts[1];
    } else {
      throw new Error("invalid github url");
    }
  } catch (error) {
    return null;
  }
};

export default extractRepositoryName;
