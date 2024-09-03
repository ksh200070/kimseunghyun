import styles from "./ImageGallery.module.scss";

const importAll = (r: any): { [key: string]: string } => {
  let images: { [key: string]: string } = {};
  r.keys().forEach((item: string, index: number) => {
    images[item.replace("./", "")] = r(item) as string;
  });
  return images;
};

interface ImageGalleryProps {
  folderName: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ folderName }) => {
  // require.context의 인수는 모두 리터럴이야아함. ${folderName}으로 하면 에러 발생함..
  let images: { [key: string]: string } = {};

  switch (folderName) {
    case "project_1":
      images = importAll(
        require.context(
          "../../assets/image/project_1",
          true,
          /\.(png|jpe?g|svg)$/
        )
      );
      break;
    case "project_2":
      images = importAll(
        require.context(
          "../../assets/image/project_2",
          true,
          /\.(png|jpe?g|svg)$/
        )
      );
      break;
    case "project_3":
      images = importAll(
        require.context(
          "../../assets/image/project_3",
          true,
          /\.(png|jpe?g|svg)$/
        )
      );
      break;
    case "project_4":
      images = importAll(
        require.context(
          "../../assets/image/project_4",
          true,
          /\.(png|jpe?g|svg)$/
        )
      );
      break;
  }

  // 이미지를 숫자 순서대로 정렬하는 함수
  const sortedImageKeys = Object.keys(images).sort((a, b) => {
    const aNum = parseInt(a.replace(/\D/g, ""));
    const bNum = parseInt(b.replace(/\D/g, ""));
    return aNum - bNum;
  });

  return (
    <div className={styles.imgs}>
      {sortedImageKeys.map((key, index) => (
        <img key={key} src={images[key]} alt={key} />
      ))}
    </div>
  );
};

export default ImageGallery;
