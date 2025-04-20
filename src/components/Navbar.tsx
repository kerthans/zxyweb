"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-bold text-primary">竹昕岳</span>
                            <span className="text-xl font-semibold ml-1">云产品</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/#products" className="text-gray-700 hover:text-primary transition-colors">
                            产品
                        </Link>
                        <Link href="/#features" className="text-gray-700 hover:text-primary transition-colors">
                            特性
                        </Link>
                        <Link href="/#testimonials" className="text-gray-700 hover:text-primary transition-colors">
                            客户评价
                        </Link>
                        <Link href="/#pricing" className="text-gray-700 hover:text-primary transition-colors">
                            价格
                        </Link>
                        <Link href="/#contact" className="text-gray-700 hover:text-primary transition-colors">
                            联系我们
                        </Link>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="outline">登录</Button>
                        <Button>免费试用</Button>
                    </div>

                    {/* Mobile Navigation Toggle */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 pb-6 space-y-4">
                        <Link
                            href="/#products"
                            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-primary rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            产品
                        </Link>
                        <Link
                            href="/#features"
                            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-primary rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            特性
                        </Link>
                        <Link
                            href="/#testimonials"
                            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-primary rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            客户评价
                        </Link>
                        <Link
                            href="/#pricing"
                            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-primary rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            价格
                        </Link>
                        <Link
                            href="/#contact"
                            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-primary rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            联系我们
                        </Link>
                        <div className="grid grid-cols-2 gap-4 px-4 pt-2">
                            <Button variant="outline" className="w-full">登录</Button>
                            <Button className="w-full">免费试用</Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}