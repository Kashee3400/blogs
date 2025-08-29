import AnimatedCard from "./AnimatedCard";

interface NewsletterWidgetProps {
  onSubscribe: (email: string) => void;
}

const NewsletterWidget: React.FC<NewsletterWidgetProps> = ({ onSubscribe }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    onSubscribe(email);
    e.currentTarget.reset();
  };

  return (
    <AnimatedCard delay={500} className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl shadow-xl p-6">
      <h3 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
      <p className="text-sm text-indigo-100 mb-6">
        Get the latest articles and insights delivered straight to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          type="submit"
          className="w-full bg-white text-indigo-700 font-medium py-3 rounded-xl hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Subscribe
        </button>
      </form>
    </AnimatedCard>
  );
};

export default NewsletterWidget;
