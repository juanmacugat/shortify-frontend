'use client';
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/HwIuUffwN5v
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LinkResult } from "./link-result"
import { useState } from "react";

export function HomePage() {

  const [longUrlValue, setLongUrlValue] = useState('');
  const [expirationValue, setExpirationValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleLongUrlChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setLongUrlValue(e.target.value);
  }

  const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationValue(e.target.value);
  }
  
  const handleSubmit = async () => {
    try {
      // Set loading to true while the data is being fetched
      setLoading(true);

      const body = {
        long_url: longUrlValue,
        expiration_in_seconds: expirationValue
      }

      // Perform the API call
      const response = await fetch('https://shortify-java.up.railway.app/v1/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqbUB0ZXN0LmNvbSIsImlhdCI6MTcwMjg0MjI4NCwiZXhwIjoxNzAzMDE1MDg0fQ.JknCxqO7nNMKeorR5Q0PbKB5hVXZxgeZMHU7IfEkvoQ'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      setResponse(`https://shortify-java.up.railway.app/${data.id}`);

      // Set the fetched data in the state
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      // Set loading back to false after the data is fetched (success or failure)
      setLoading(false);
    }
  };

  return (
    <div key="1" className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <LinkIcon className="h-6 w-6" />
          <span className="sr-only">Shortify</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simplify your links with Shortify
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Shortify helps you shorten, create and share branded links with custom domains at scale.
                </p>
              </div>
              <div className="flex flex-col w-full max-w-md space-y-4">
                <input
                  aria-label="Enter link"
                  className="p-2 border border-gray-200 rounded-md"
                  placeholder="Enter your link here..."
                  type="text"
                  value={longUrlValue}
                  onChange={handleLongUrlChange}
                />
                <div className="flex items-center space-x-2 w-full">
                  <input
                    aria-label="Enter expiration value"
                    className="p-2 border border-gray-200 rounded-md flex-grow"
                    placeholder="Expiration"
                    value={expirationValue}
                    type="number"
                    onChange={handleExpirationChange}
                  />
                  <select
                    aria-label="Select expiration time"
                    className="p-2 border border-gray-200 rounded-md"
                    id="expiration"
                  >
                    <option value="seconds">Seconds</option>
                    <option value="minutes">Minutes</option>
                    <option value="days">Days</option>
                  </select>
                </div>
                <Button className="bg-black text-white" onClick={handleSubmit} disabled={loading}>Create Shortened URL</Button>
                <LinkResult shortLink={response}></LinkResult>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© Shortify. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}


function LinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}