function FAQs({
  Faqs,
}: {
  Faqs: {
    question: string;
    answer: string;
  }[];
}) {
  return (
    <div className={`mt-40 relative ${Faqs && "md:px-0 px-3"}`}>
      <div className="max-w-screen-md mx-auto sm:px-6 lg:px-8 flex flex-col justify-between">
        <div className="text-center">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            F.A.Q
          </p>
          <h2 className="text-3xl sm:text-4xl leading-normal text-primary">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
        </div>

        <div className="md:mt-20 mt-10">
          <div className="space-y-4">
            {Faqs.map((faq, index) => (
              <details
                key={index}
                className="group  rounded-lg p-4 bg-white "
                open={index === 0}
              >
                <summary className="flex justify-between items-center cursor-pointer  font-medium text-gray-700">
                  <div className="w-full grid grid-cols-7 items-center space-x-3">
                    <div className="w-10 col-span-1 h-10 flex items-center justify-center rounded-full bg-primary text-white text-xl ">
                      ?
                    </div>
                    <h3 className="md:text-lg col-span-6 text-base">
                      {faq.question}
                    </h3>
                  </div>
                </summary>
                <div className="mt-4 md:pl-11 pl-7 pr-4 py-2 bg-purple-50 text-gray-700 border-l-4 border-secondary">
                  <p className="md:text-base text-sm">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
