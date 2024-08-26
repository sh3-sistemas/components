export type style = {
  container: string;
  card: string;
  circle: string;
};

export type NoticeCard = {
  variation: string;
  title: string;
  text: string;
};

export type PictureCard = {
  image: string;
  label: string;
  params: Object;
  onClick: Function;
};

export type PictureCardStyle = {
  card: string;
  label: string;
  image: string;
};

type cardVariation = {
  cardStyle: string;
  circleStyle: string;
  iconVariation: string;
  iconColor: string;
};

const notice = <cardVariation>{
  cardStyle: "bg-mercury-100/80 hover:bg-mercury-100",
  circleStyle: "bg-selenium-400",
  iconVariation: "entypo:megaphone",
  iconColor: "white",
};
const alert = <cardVariation>{
  cardStyle: "bg-protoc-50/80 hover:bg-protoc-100/80",
  circleStyle: "bg-protoc-300/80",
  iconVariation: "ph:warning-fill",
  iconColor: "white",
};

export const variations = <Record<string, cardVariation>>{
  notice: notice,
  alert: alert,
};
