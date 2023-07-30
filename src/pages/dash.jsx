const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];
function teammembers() {
  return (
    <>
      <div className="min-h-full bg-cyan-50">
        {/* Main column */}
        {/* Search header */}
        <div className="flex-1">
          {/* Page title & actions */}
          <div className="px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 grid-rows-10 gap-4">
              <div className="col-span-3 row-span-3 bg-white m-6 border-gray-200">
                1
              </div>
              <div className="col-span-3 row-span-3 col-start-4 bg-white m-6 border-gray-200">
                2
              </div>
              <div className="col-span-3 row-span-3 col-start-7 bg-white m-6 border-gray-200">
                3
              </div>
              <div className="col-span-3 row-span-4 col-start-10 bg-white m-6 border-gray-200">
                4
              </div>
              <div className="col-span-3 row-span-3 row-start-4 bg-white m-6 border-gray-200">
                5
              </div>
              <div className="col-span-3 row-span-3 col-start-4 row-start-4 bg-white m-6 border-gray-200">
                6
              </div>
              <div className="col-span-3 row-span-3 col-start-7 row-start-4 bg-white m-6 border-gray-200">
                7
              </div>
              <div className="col-span-3 row-span-3 col-start-1 row-start-7 bg-white m-6 border-gray-200">
                8
              </div>
              <div className="col-span-3 row-span-3 col-start-4 row-start-7 bg-white m-6 border-gray-200">
                9
              </div>
              <div className="col-span-3 row-span-3 col-start-7 row-start-7 bg-white m-6 border-gray-200">
                10
              </div>
              <div className="col-span-3 row-span-2 col-start-10 row-start-5 bg-white m-6 border-gray-200">
                {people.map((person) => (
                  <div
                    key={person.email}
                    className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">
                          {person.name}
                        </p>
                        <p className="truncate text-sm text-gray-500">
                          {person.role}
                        </p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-span-3 row-span-2 col-start-10 row-start-7 bg-white m-6 border-gray-200">
                {people.map((person) => (
                  <div
                    key={person.email}
                    className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">
                          {person.name}
                        </p>
                        <p className="truncate text-sm text-gray-500">
                          {person.role}
                        </p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-span-3 row-span-2 col-start-10 row-start-9bg-white m-6 border-gray-200">
                {people.map((person) => (
                  <div
                    key={person.email}
                    className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">
                          {person.name}
                        </p>
                        <p className="truncate text-sm text-gray-500">
                          {person.role}
                        </p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default teammembers;
