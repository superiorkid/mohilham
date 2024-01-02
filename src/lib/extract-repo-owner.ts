export default function extractRepositoryOwner(url: string) {
  const regex = /(?:https?:\/\/)?(?:www\.)?github\.com\/([^/]+)\/([^/]+)/;
  const match = url.match(regex);

  if (match && match.length >= 2) {
    return match[1];
  } else {
    return "Invalid GitHub URL";
  }
}
