
const Users = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Add User
                </button>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <p className="text-gray-600">User management interface would go here...</p>
            </div>
        </div>
    );
}

export default Users;