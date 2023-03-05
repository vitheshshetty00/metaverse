import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px] ">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] bg-[#323f5d] rounded-3xl `}
    >
      <img src={imgUrl} alt={title} />
    </div>
    <h1 className="mt-7 font-bold text-2xl leading-[30px] text-white ">
      {title}
    </h1>
    <p className="flex-1 mt-4 font-normal text-lg text-[#B0B0B0] leading-8 ">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
