const Contact = () => {
  return (
    <div className="flex-1 flex flex-col sm:flex-row-reverse sm:items-center sm:justify-between sm:gap-16">
      <form className="mt-10 sm:flex-1">
        <div className="max-w-[692px]">
          <label htmlFor="name" className="text-white text-xl font-bold block">
            Name
          </label>
          <input
            id="name"
            className="bg-secondary text-[#AFBEDC] p-3 sm:p-6 rounded-[2px] my-2 sm:my-6 w-full"
            placeholder="Hamidreza takaloo"
          />
          <label
            htmlFor="message"
            className="text-white text-xl font-bold block"
          >
            Your message
          </label>
          <textarea
            id="message"
            className="bg-secondary text-[#AFBEDC] p-3 sm:p-6 rounded-[2px] my-2 sm:my-6 w-full min-h-[120px] sm:h-[344px]"
            placeholder="Hi i like your design and i want talk to you about a front project with react"
          ></textarea>
          <button className="bg-white text-lg font-bold px-2 py-1.5 rounded-[2px] ml-auto block mt-4">
            Send Message
            <img src="Send.svg" className="ml-2 inline-block" />
          </button>
        </div>
      </form>
      <div className="flex-1  sm:self-stretch sm:justify-between flex flex-col items-center justify-end gap-16">
        <img src="amico.svg" className="sm:w-[428px] sm:my-auto" />
        <div className="flex gap-2 mb-4 sm:self-center">
          <img src="instagram.svg" className="sm:w-10" />
          <img src="telegram.svg" className="sm:w-10" />
          <img src="twitter.svg" className="sm:w-10" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
