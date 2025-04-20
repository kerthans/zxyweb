import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center mb-4">
                            <span className="text-2xl font-bold text-white">竹昕岳</span>
                            <span className="text-xl font-semibold ml-1 text-primary">云产品</span>
                        </Link>
                        <p className="text-gray-400 mb-4">
                            为您的业务提供智能AI营销解决方案，助力您的业务增长和数字化转型。
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-primary" aria-label="微信">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-primary" aria-label="微博">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-primary" aria-label="知乎">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">产品</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-primary">内容智能助手</Link></li>
                            <li><Link href="#" className="hover:text-primary">营销洞察分析</Link></li>
                            <li><Link href="#" className="hover:text-primary">社交媒体管理器</Link></li>
                            <li><Link href="#" className="hover:text-primary">AI营销助手</Link></li>
                            <li><Link href="#" className="hover:text-primary">所有产品</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">资源</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-primary">博客</Link></li>
                            <li><Link href="#" className="hover:text-primary">案例研究</Link></li>
                            <li><Link href="#" className="hover:text-primary">产品文档</Link></li>
                            <li><Link href="#" className="hover:text-primary">帮助中心</Link></li>
                            <li><Link href="#" className="hover:text-primary">API文档</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">公司</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-primary">关于我们</Link></li>
                            <li><Link href="#" className="hover:text-primary">联系我们</Link></li>
                            <li><Link href="#" className="hover:text-primary">加入我们</Link></li>
                            <li><Link href="#" className="hover:text-primary">合作伙伴</Link></li>
                            <li><Link href="#" className="hover:text-primary">媒体资源</Link></li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-8 bg-gray-700" />

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">© 2025 竹昕岳科技有限公司. 保留所有权利</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-gray-400 hover:text-primary">隐私政策</Link>
                        <Link href="#" className="text-gray-400 hover:text-primary">使用条款</Link>
                        <Link href="#" className="text-gray-400 hover:text-primary">Cookie政策</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}