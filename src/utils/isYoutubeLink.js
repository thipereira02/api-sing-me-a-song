function isYoutubeVideo(youtubeLink) {
  const v = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  return !!(youtubeLink.match(v));
}

export { isYoutubeVideo };
