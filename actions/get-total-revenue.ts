import prismadb from "@/lib/prismadb"

export const getTotalRevenue = async (storeId: string) => {
    const paidOrders = prismadb.order.findMany({
        where: {
            storeId,
            isPaid: true,
        },
        include: {
            orderItems: {
                include: {
                    product: true,
                },
            },
        },
    })

    const totalRevenue = (await paidOrders).reduce((total, order) => {
        const orderTotal = order.orderItems.reduce((orderSum, item) => {
            return orderSum + item.product.price
        }, 0)
        return total + orderTotal
    }, 0)

    return totalRevenue
}