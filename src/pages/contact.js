const Contact = () => {
  return (
    <div className="flex-1 flex flex-col">
      <form className="mt-10">
        <label htmlFor="name" className="text-white text-xl font-bold block">
          Name
        </label>
        <input
          id="name"
          className="bg-secondary text-[#AFBEDC] p-3 rounded-[2px] my-2 w-full"
          placeholder="Hamidreza takaloo"
        />
        <label htmlFor="message" className="text-white text-xl font-bold block">
          Your message
        </label>
        <textarea
          id="message"
          className="bg-secondary text-[#AFBEDC] p-3 rounded-[2px] my-2 w-full min-h-[120px]"
          placeholder="Hi i like your design and i want talk to you about a front project with react"
        ></textarea>
        <button className="bg-white text-lg font-bold px-2 py-1.5 rounded-[2px] ml-auto block mt-4">
          Send Message
          <img src="Send.svg" className="ml-2 inline-block" />
        </button>
      </form>
      <div className="flex-1 flex flex-col items-center justify-end gap-16">
        <img src="amico.svg" />
        <div className="flex gap-2 mb-4">
          <img src="instagram.svg" />
          <img src="telegram.svg" />
          <img src="twitter.svg" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
