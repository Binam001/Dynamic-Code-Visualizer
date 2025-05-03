import React from 'react'

function LandingPage() {
  return (
    <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-black py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Visualize Your Code Execution in Real-Time
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Dynamic Code Visualizer helps you understand program flow, debug errors, and learn programming
                    concepts through interactive visualizations.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="/codeEditor"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white border-gray-200 px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gray-100"
                  >
                    Try It Now
                  </a>
                  <a
                    href="#features"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-100 bg-[var(--dark-bg-color)] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[var(--grey-color)]"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl border bg-gray-100 lg:order-last">
                <img
                  src="/images/5344819.jpg"
                  alt="Code visualization example showing program execution flow"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full bg-[var(--dark-gray-color)] rounded py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-black text-white px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Powerful Tools for Code Understanding
                </h2>
                <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl">
                  Dynamic Code Visualizer offers a comprehensive suite of tools to help you understand, debug, and
                  optimize your code.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-[var(--light-gray-color)] bg-[var(--dark-bg-color)] p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--dark-bg-color)] text-xl">▶️</div>
                <h3 className="text-xl font-bold">Execution Flow</h3>
                <p className="text-center text-gray-500">
                  Watch your code execute step-by-step with visual indicators showing the flow of execution.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-[var(--light-gray-color)] bg-[var(--dark-bg-color)] p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--dark-bg-color)] text-xl">⚠️</div>
                <h3 className="text-xl font-bold">Error Visualization</h3>
                <p className="text-center text-gray-500">
                  Instantly identify and understand errors with clear visual indicators and explanations.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-[var(--light-gray-color)] bg-[var(--dark-bg-color)] p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--dark-bg-color)] text-xl">🔄</div>
                <h3 className="text-xl font-bold">Algorithm Animation</h3>
                <p className="text-center text-gray-500">
                  See algorithms come to life with animated visualizations that illustrate complex concepts.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-[var(--light-gray-color)] bg-[var(--dark-bg-color)] p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--dark-bg-color)] text-xl">💡</div>
                <h3 className="text-xl font-bold">Learning Aids</h3>
                <p className="text-center text-gray-500">
                  Interactive tutorials and explanations to help beginners understand programming concepts.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-[var(--light-gray-color)] bg-[var(--dark-bg-color)] p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--dark-bg-color)] text-xl">🧠</div>
                <h3 className="text-xl font-bold">Memory Visualization</h3>
                <p className="text-center text-gray-500">
                  Track memory usage and variable states throughout program execution.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-[var(--light-gray-color)] bg-[var(--dark-bg-color)] p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--dark-bg-color)] text-xl">🔤</div>
                <h3 className="text-xl font-bold">Multi-language Support</h3>
                <p className="text-center text-gray-500">
                  Supports multiple programming languages including JavaScript, Python, Java, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full bg-[var(--dark-bg-color)] py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-black px-3 py-1 text-sm text-white">How It Works</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Powerful, and Intuitive</h2>
                <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl">
                  Get started in minutes and gain insights into your code's behavior.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl items-center gap-6 lg:grid-cols-2">
              <img
                src="https://placehold.co/550x550/f3f4f6/a1a1aa?text=Interface+Demo"
                alt="Dynamic Code Visualizer interface"
                className="mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl object-cover object-center lg:max-w-none"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">1</div>
                    <div>
                      <h3 className="text-xl font-bold">Write Your Code</h3>
                      <p className="text-gray-500">
                        Use our intuitive code editor with syntax highlighting and auto-completion.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">2</div>
                    <div>
                      <h3 className="text-xl font-bold">Run Visualization</h3>
                      <p className="text-gray-500">
                        Click the visualize button to see your code execution in real-time.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">3</div>
                    <div>
                      <h3 className="text-xl font-bold">Analyze and Learn</h3>
                      <p className="text-gray-500">Understand program flow, identify bugs, and optimize your code.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">4</div>
                    <div>
                      <h3 className="text-xl font-bold">Share and Collaborate</h3>
                      <p className="text-gray-500">
                        Share your visualizations with others for teaching or collaboration.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full bg-[var(--light-gray-color)] py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-black px-3 py-1 text-sm text-white">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Loved by Developers and Educators</h2>
                <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl">
                  See what our users have to say about Dynamic Code Visualizer.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
              {/* Testimonial 1 */}
              <div className="rounded-lg border border-white bg-[var(--dark-bg-color)] p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://placehold.co/100x100/f3f4f6/a1a1aa?text=SJ"
                      alt="User avatar"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Sarah Johnson</h3>
                      <p className="text-sm text-gray-500">Computer Science Professor</p>
                    </div>
                  </div>
                  <p className="text-gray-500">
                    "Dynamic Code Visualizer has transformed how I teach programming concepts to my students. The visual
                    representation of code execution helps them grasp complex ideas much faster."
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="rounded-lg border border-white bg-[var(--dark-bg-color)] p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://placehold.co/100x100/f3f4f6/a1a1aa?text=MC"
                      alt="User avatar"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Michael Chen</h3>
                      <p className="text-sm text-gray-500">Software Developer</p>
                    </div>
                  </div>
                  <p className="text-gray-500">
                    "I use Dynamic Code Visualizer daily to debug complex algorithms. Being able to see the execution
                    flow has saved me countless hours of debugging time."
                  </p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="rounded-lg border border-white bg-[var(--dark-bg-color)] p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://placehold.co/100x100/f3f4f6/a1a1aa?text=ER"
                      alt="User avatar"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Emily Rodriguez</h3>
                      <p className="text-sm text-gray-500">Coding Bootcamp Instructor</p>
                    </div>
                  </div>
                  <p className="text-gray-500">
                    "My bootcamp students love using Dynamic Code Visualizer. It helps them understand programming
                    fundamentals and builds their confidence as they see exactly how their code executes."
                  </p>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="rounded-lg border border-white bg-[var(--dark-bg-color)] p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://placehold.co/100x100/f3f4f6/a1a1aa?text=DK"
                      alt="User avatar"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-bold">David Kim</h3>
                      <p className="text-sm text-gray-500">Self-taught Programmer</p>
                    </div>
                  </div>
                  <p className="text-gray-500">
                    "As someone learning to code on my own, Dynamic Code Visualizer has been invaluable. Being able to
                    visualize algorithms and see how my code runs has accelerated my learning tremendously."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="try-now" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Visualize Your Code?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
                  Get started with Dynamic Code Visualizer today and transform how you understand, debug, and learn
                  programming.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="#signup"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900"
                >
                  Sign Up Free
                </a>
                <a
                  href="#demo"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white border-gray-200 px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gray-100"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}

export default LandingPage