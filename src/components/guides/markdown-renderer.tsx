import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className="text-3xl font-bold text-primary mt-8 mb-4">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>,
          p: ({ children }) => <p className="text-text-muted leading-relaxed my-3">{children}</p>,
          a: ({ href, children }) => (
            <a href={href} className="text-blue-400 hover:text-blue-300 underline">{children}</a>
          ),
          ul: ({ children }) => <ul className="list-disc list-inside text-text-muted space-y-1 my-3">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside text-text-muted space-y-1 my-3">{children}</ol>,
          li: ({ children }) => <li className="text-text-muted">{children}</li>,
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border border-border">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-card">{children}</thead>,
          th: ({ children }) => <th className="border border-border px-4 py-2 text-left font-semibold text-sm">{children}</th>,
          td: ({ children }) => <td className="border border-border px-4 py-2 text-sm text-text-muted">{children}</td>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 py-2 my-3 bg-card/50 rounded-r text-text-muted italic">
              {children}
            </blockquote>
          ),
          code: ({ children, className }) => {
            if (className) {
              return <code className="bg-background px-1 py-0.5 rounded text-sm">{children}</code>;
            }
            return <code className="block bg-background p-4 rounded-lg text-sm my-3 overflow-x-auto">{children}</code>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
