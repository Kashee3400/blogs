import {
    BarChart3,
    Plus,
    Filter,
    Download,
    TrendingUp
} from "lucide-react";

const AdminDashboard = () => {
    const stats = [
        { label: "Total Users", value: "12,543", change: "+12%", trend: "up" },
        { label: "Revenue", value: "$45,234", change: "+8%", trend: "up" },
        { label: "Orders", value: "1,234", change: "-3%", trend: "down" },
        { label: "Conversion", value: "3.2%", change: "+1.2%", trend: "up" }
    ];

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            </div>
                            <div className={`flex items-center gap-1 text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                <TrendingUp size={16} className={stat.trend === 'down' ? 'rotate-180' : ''} />
                                {stat.change}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts and Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Details</button>
                    </div>
                    <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                        <BarChart3 size={48} className="text-blue-400" />
                        <span className="ml-3 text-gray-600">Chart Placeholder</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">See All</button>
                    </div>
                    {/* <div className="space-y-3">
                        {notifications.map(notification => (
                            <div key={notification.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900">{notification.message}</p>
                                    <p className="text-xs text-gray-500">{notification.time}</p>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-md transition-shadow">
                    <Plus size={16} />
                    Create New
                </button>
                <button className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <Download size={16} />
                    Export Data
                </button>
                <button className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <Filter size={16} />
                    Filter
                </button>
            </div>
        </div>
    );
}

export default AdminDashboard;