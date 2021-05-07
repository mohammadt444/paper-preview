const { W } = window;

export const openModal = (url) => {
  if (W) {
    W.images.openModal({ src: url });
  } else {
    console.log("open modal");
  }
};
