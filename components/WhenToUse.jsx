 <section className="w-full bg-cover bg-center bg-no-repeat overflow-x-hidden py-24"  style={{ backgroundImage: "url(/asset/background.png)" }} >
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT IMAGE */}
            <div className="flex justify-center md:justify-start">
              <Image
                src={location}
                alt="location"
                className="w-[100%] h-auto"
                priority
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2 className="mb-7">
                How to Ship with <span className="text-primary">Frisbi</span>
              </h2>

              <p className="mb-6">
                Sending packages with Frisbi is effortless. Simply pack your
                items securely, and we’ll take care of everything else
              </p>

              {/* FAQ */}
              <div>
                {faqData.map((step) => (
                  <div key={step.id} className="border-b py-4">
                    <button
                      onClick={() => setOpen(open === step.id ? null : step.id)}
                      className="flex w-full justify-between items-center text-left"
                    >
                      <span className="font-bold text-[20px]">
                        {step.title}
                      </span>
                      {open === step.id ? (
                        <Minus size={20} />
                      ) : (
                        <Plus size={20} />
                      )}
                    </button>

                    <AnimatePresence>
                      {open === step.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <p className="text-second mt-3 pr-4">
                            {step.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>