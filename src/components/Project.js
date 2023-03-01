const Project = ({ info }) => {
  return (
    <div className="bg-[#091939] flex flex-col gap-6 items-center p-8 rounded-[2px]">
      <h2 className="text-2xl font-bold text-white">{info.name}</h2>
      <p className="text-[#8CAAE4]">{info.desc}</p>
      <div className="flex justify-around gap-4">
        <a
          href={info.live}
          className="bg-secondary text-white font-bold text-lg py-1.5 px-5 rounded-[2px]"
        >
          Open Live
        </a>
        <a href={info.github}>
          <img src="./github.svg" />
        </a>
      </div>
      <div className="flex my-4 gap-2">
        {info.techs.map((tech, index) => (
          <img key={index} src={tech + ".svg"} />
        ))}
      </div>
    </div>
  );
};

export default Project;
