import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const productData = [
    {
        id: 1,
        title: "内容智能助手",
        description: "AI驱动的内容创作工具，帮助您生成高质量的营销文案、社交媒体帖子和博客文章。",
        features: ["多语言支持", "SEO优化建议", "风格定制", "一键生成"],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
        )
    },
    {
        id: 2,
        title: "营销洞察分析",
        description: "实时分析您的营销活动，提供数据洞察和改进建议，帮助您优化营销策略。",
        features: ["实时数据分析", "竞争对手监控", "转化率优化", "自动化报告"],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
            </svg>
        )
    },
    {
        id: 3,
        title: "社交媒体管理器",
        description: "一站式社交媒体管理平台，AI辅助内容规划、自动发布和互动跟踪。",
        features: ["多平台支持", "内容日历", "自动发布", "数据分析"],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        )
    }
]

export default function Products() {
    return (
        <section className="py-16 md:py-24" id="products">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">我们的AI营销产品</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    探索我们的AI营销应用套件，为您的业务提供最先进的营销工具
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productData.map((product) => (
                    <Card key={product.id} className="overflow-hidden border-2 hover:border-primary/50 transition-all">
                        <CardHeader className="pb-3">
                            <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                {product.icon}
                            </div>
                            <CardTitle className="text-2xl">{product.title}</CardTitle>
                            <CardDescription className="text-base mt-2">{product.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">了解更多</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}