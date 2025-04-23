import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="py-16 md:py-24" id="hero">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="text-primary">AI技术</span>驱动的<br />一站式运营解决方案
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                    专注于企业运营的转化与交付，做所有商家都能用的AI智能运营工具，让天下没有难做的运营
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
                        <p className="text-sm text-gray-500">已被多家知名企业信赖</p>
                        <div className="flex flex-wrap gap-6 items-center mt-3">
                            {['山东美旭信息科技有限公司', '泰山体育产业集团有限公司', '天津凯世通阀门制造有限公司', '哈尔滨隆港商业管理有限公司'].map((brand, index) => (
                                <div key={index} className="text-gray-400 font-semibold">
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <Image 
                        src="/show.png"
                        alt="AI营销解决方案展示"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}