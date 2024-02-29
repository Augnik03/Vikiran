import React from "react";
import Sidebar from "../components/Sidebar";

export default function DocFeed() {
  return (
    <>
      <div className="">
        <Sidebar />
      </div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <body className="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto ">
            <main className="flex-1 md:p-0 lg:pt-8 lg:px-8 md:ml-24 flex flex-col ">
              <section className="bg-blue-100 p-4 shadow">
                <div className="md:flex">
                  <h2 className="uppercase tracking-wide text-sm sm:text-lg mb-6">
                    Send Feedback Regarding Diagnosis
                  </h2>
                </div>
                <form>
                  <div className="md:flex mb-8 p-2 border border-black rounded-lg">
                    <div className="md:w-1/3">
                      <legend className="uppercase tracking-wide text-sm">
                        User Info
                      </legend>
                      <p className="text-xs font-light text-red">
                        This entire section is required.
                      </p>
                    </div>
                    <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                      <div className="mb-4">
                        <label className="block uppercase tracking-wide text-xs font-bold">
                          Name
                        </label>
                        <input
                          className="w-full shadow-inner p-4 border-0"
                          type="text"
                          name="name"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="md:flex mb-4">
                        <div className="md:flex-1 md:pr-3">
                          <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                            Designation
                          </label>
                          <input
                            className="w-full shadow-inner p-4 border-0"
                            type="text"
                            name="designation"
                            placeholder="Doctor"
                          />
                        </div>
                        <div className="md:flex-1 md:pl-3">
                          <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                            ID No.
                          </label>
                          <input
                            className="w-full shadow-inner p-4 border-0"
                            type="number"
                            name="idno"
                            placeholder="00000"
                          />
                        </div>
                      </div>
                      <div className="md:flex mb-4">
                        <div className="md:flex-1 md:pr-3">
                          <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                            Category
                          </label>
                          <input
                            className="w-full shadow-inner p-4 border-0"
                            type="text"
                            name="category"
                            placeholder="Report/General/HR"
                          />
                        </div>
                        <div className="md:flex-1 md:pl-3">
                          <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                            Status
                          </label>
                          <input
                            className="w-full shadow-inner p-4 border-0"
                            type="text"
                            name="status"
                            placeholder="Urgent/Normal/High"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex mb-8 p-2 border border-black rounded-lg">
                    <div className="md:w-1/3">
                      <legend className="uppercase tracking-wide text-sm">
                        Contact
                      </legend>
                    </div>
                    <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                      <div className="mb-4">
                        <label className="block uppercase tracking-wide text-xs font-bold">
                          Phone
                        </label>
                        <input
                          className="w-full shadow-inner p-4 border-0"
                          type="number"
                          name="phone"
                          placeholder="00000 00000"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                          Email
                        </label>
                        <input
                          className="w-full shadow-inner p-4 border-0"
                          type="email"
                          name="email"
                          placeholder="johndoe@doctor.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:flex mb-6 p-2 border border-black rounded-lg">
                    <div className="md:w-1/3">
                      <legend className="uppercase tracking-wide text-sm">
                        Description
                      </legend>
                    </div>
                    <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                      <textarea
                        className="w-full shadow-inner p-4 border-0"
                        placeholder="Describe the issue in detail."
                        rows="6"
                      ></textarea>
                    </div>
                  </div>
                  <div className="md:flex mb-6 p-2 border border-black rounded-lg">
                    <div className="md:w-1/3">
                      <legend className="uppercase tracking-wide text-sm">
                        Report Image
                      </legend>
                    </div>
                    <div className="md:flex-1 px-3 text-center">
                      <div className="button rounded-md bg-gold hover:bg-gold-dark text-cream mx-auto cusor-pointer relative">
                        <input
                          className="opacity-0 absolute pin-x pin-y"
                          type="file"
                          name="proof"
                        />
                        Add Report File
                      </div>
                    </div>
                  </div>
                  <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                    <div className="md:flex-1 px-3 text-center md:text-right">
                      <input type="hidden" name="submission" value="0" />
                      <input
                        className="button border border-black p-2 rounded-lg text-white bg-blue-500 hover:bg-brick-dark"
                        type="submit"
                        value="Submit Feedback"
                      />
                    </div>
                  </div>
                </form>
              </section>
            </main>
          </body>
        </div>
      </div>
    </>
  );
}
