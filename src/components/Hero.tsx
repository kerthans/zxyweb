import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <section className="py-16 md:py-24" id="hero">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="text-primary">AI技术</span>驱动的<br />现代营销解决方案
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                        我们的AI营销工具让您的业务增长变得简单。从内容创作到客户分析，竹昕岳云产品提供全方位的AI营销解决方案。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="text-md">
                            开始免费试用
                        </Button>
                        <Button size="lg" variant="outline" className="text-md">
                            预约演示
                        </Button>
                    </div>
                    <div className="pt-6">
                        <p className="text-sm text-gray-500">已被超过500家企业信赖</p>
                        <div className="flex flex-wrap gap-6 items-center mt-3">
                            {['丘山求索科技公司', '品牌2', '品牌3', '品牌4'].map((brand, index) => (
                                <div key={index} className="text-gray-400 font-semibold">
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative h-[400px] bg-green-100 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="inline-block rounded-full bg-primary/10 p-6 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                            </div>
                            <p className="text-xl font-semibold text-gray-700">AI技术演示图片</p>
                            <p className="text-gray-500 mt-2">这里将展示您的产品界面或功能</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}