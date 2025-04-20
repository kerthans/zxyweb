import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const testimonials = [
    {
        id: 1,
        content: "竹昕岳的AI营销助手彻底改变了我们的内容创作流程。我们现在能够在一半的时间内产出两倍的高质量内容。",
        name: "张经理",
        title: "营销总监",
        company: "科技有限公司",
        initials: "张"
    },
    {
        id: 2,
        content: "社交媒体管理一直是我们的痛点，直到我们开始使用竹昕岳的云产品。现在我们的互动率提高了120%，团队效率也大幅提升。",
        name: "李总监",
        title: "社交媒体负责人",
        company: "品牌管理公司",
        initials: "李"
    },
    {
        id: 3,
        content: "营销数据分析从未如此简单直观。竹昕岳的AI分析工具帮助我们发现了多个优化机会，大幅提升了我们的ROI。",
        name: "王经理",
        title: "数字营销主管",
        company: "电商平台",
        initials: "王"
    },
    {
        id: 4,
        content: "作为一家初创企业，我们需要高效且经济的营销解决方案。竹昕岳不仅提供了出色的产品，还提供了优秀的客户支持。",
        name: "陈创始人",
        title: "CEO",
        company: "创新科技初创公司",
        initials: "陈"
    }
]

export default function Testimonials() {
    return (
        <section className="py-16 md:py-24" id="testimonials">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">用户如何评价我们</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        了解我们的AI营销工具如何帮助客户取得真实的业务成果
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader className="pb-2">
                                <div className="flex items-start">
                                    <Avatar className="h-12 w-12 mr-4 border-2 border-primary">
                                        <AvatarFallback className="bg-primary/10 text-primary">
                                            {testimonial.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">
                                            {testimonial.title}, {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 p-8 bg-green-50 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">获得显著的营销效果</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-3xl font-bold text-primary mb-2">85%</div>
                            <p className="text-gray-600">内容创作时间减少</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-3xl font-bold text-primary mb-2">120%</div>
                            <p className="text-gray-600">社交媒体互动提升</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="text-3xl font-bold text-primary mb-2">40%</div>
                            <p className="text-gray-600">营销ROI增长</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}