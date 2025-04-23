import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const pricingPlans = [
    {
        id: 1,
        name: "初创版",
        price: "19,800",
        description: "适合初创企业和小型团队的基础AI营销解决方案",
        features: [
            "AI 多语言客服系统",
            "企业个性化工作流搭建",
            "支持企业私有知识库",
            "多渠道接入(官网/微信/APP)",
            "含年度系统维护与基础功能升级服务"
        ],
        isPopular: false
    },
    {
        id: 2,
        name: "专业版",
        price: "39,800",
        description: "适合成长型企业的全功能AI营销平台",
        features: [
            "行业定制大模型",
            "多模态交互",
            "企业知识库自动更新",
            "全渠道覆盖",
            "每月有系统维护额度",
        ],
        isPopular: true
    },
    {
        id: 3,
        name: "企业版",
        price: "定制",
        description: "为大型企业和团队定制的企业级AI营销解决方案",
        features: [
            "企业专属AI大模型训练",
            "全模态交互支持",
            "跨域智能工作流引擎",
            "全球节点私有化部署",
            "战略级专属服务",
        ],
        isPopular: false
    }
]

export default function Pricing() {
    return (
        <section className="py-16 md:py-24" id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">价格方案</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        选择适合您业务需求的AI营销解决方案，助力您的业务增长
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan) => (
                        <Card
                            key={plan.id}
                            className={`border-2 flex flex-col ${
                                plan.isPopular ? "border-primary relative shadow-lg" : "border-gray-200"
                            }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/3">
                                    <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                        最受欢迎
                                    </div>
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                <div className="mt-2">
                                    <span className="text-4xl font-bold">¥{plan.price}</span>
                                    {plan.price !== "定制" && <span className="text-gray-500 ml-2">/每套/每年</span>}
                                </div>
                                <CardDescription className="mt-3 text-gray-600">{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className={`w-full ${plan.isPopular ? "" : "bg-white text-primary hover:text-white border border-primary"}`}
                                    variant={plan.isPopular ? "default" : "outline"}
                                >
                                    {plan.price === "定制" ? "联系我们" : "开始使用"}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-xl font-semibold mb-4">有任何疑问？</h3>
                    <p className="text-gray-600 max-w-xl mx-auto mb-6">
                        如果您对我们的产品或价格有任何疑问，请随时联系我们的团队，我们将很乐意为您提供帮助。
                    </p>
                    <Button variant="outline">查看常见问题</Button>
                </div>
            </div>
        </section>
    )
}