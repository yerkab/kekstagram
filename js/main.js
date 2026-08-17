const COMMENTATORS_NAMES = [
  'Иван',
  'Алихан',
  'Айсултан',
  'Омар',
  'Виктор',
  'Юлия',
  'Алдияр',
  'Амир',
  'Александр',
  'Алексей',
  'Андрей',
  'Анастасия',
  'Алиса',
  'Алина',
  'Анна',
  'Владимир',
  'Владислав',
  'Дмитрий',
  'Евгений',
  'Екатерина',
  'Елена',
  'Альтаир',
  'Айбар',
  'Алинур',
  'Арлан',
];
// массив комментариев к фотографиям
const COMMENTS_LIST = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
// массив описаний фотографий
const DESCRIPTIONS_PHOTOS = [
  'Пруд в парке',
  'Указатель на дороге',
  'Пляж на острове',
  'Девушка на берегу моря',
  'мясо с рисом',
  'Спортивная машина',
  'Клубника на тарелке',
  'Морс',
  'Самолёт над пляжем',
  'Обувь на полке',
  'дорога между деревьями',
  'Белая ауди на дороге',
  'Салат с овощами',
  'Кот над рисом в виде суши',
  'Теплая обувь надетая на ноги',
  'Самолёт в небе',
  'Оркестр на сцене',
  'Красная ретро машина в гараже',
  'Тапочки с фонариком',
  'Пальмы возле отеля',
  'Курица с овощами',
  'Закат на берегу моря',
  'Краб на бревне',
  'Концерт на сцене',
  'Белый внедорожник проезжающий мимо бегемота'
];
// функция для получения случайного целого числа из диапазона включительно
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
// функция для создания уникального идентификатора
const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};
// функция для получения случайного элемента массива
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];
// генераторы уникальных идентификаторов для фотографий, комментариев и URL

const generateUniqueCommentId = createIdGenerator();
const avatarsNumber = 6; // количество аватаров
const generateDescription = () => getRandomArrayElement(DESCRIPTIONS_PHOTOS);
const createComment = () => {
  const idComment = createIdGenerator();
  return {
    id: generateUniqueCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, avatarsNumber)}.svg`,
    message: getRandomArrayElement(COMMENTS_LIST),
    name: getRandomArrayElement(COMMENTATORS_NAMES),
  };
};

const createPhoto = (id) => {
  //const idPhoto = generateUniquePhotoId();
  //const urlUniquePhoto = generateUrlPhoto();
  const urlPhoto = `photos/${id}.jpg`;
  const descriptionPhoto = generateDescription();
  const likesPhoto = getRandomInteger(15, 200);
  const commentsCount = getRandomInteger(0, 30);
  const commentsPhoto = Array.from({ length: commentsCount }, () => createComment());
  return {
    id: id,
    url: urlPhoto,
    description: descriptionPhoto,
    likes: likesPhoto,
    comments: commentsPhoto
  };
};
const createPhotos = () => {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push(createPhoto(i));
  }
  return photos;
};

createPhotos();
