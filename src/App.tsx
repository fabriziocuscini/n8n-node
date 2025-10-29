import { CanvasNode, GmailIcon, TelegramIcon, TrelloIcon, FirecrawlIcon } from './components';

function App() {
  return (
    <div className="nodeStack">
      <CanvasNode
        name="Automate your workflow"
        subtitle="automate: workflow"
        status="active"
        serviceName="n8n"
      />
      <CanvasNode
        name="Get many messages"
        subtitle="getAll: message"
        status="pinned"
        serviceIcon={<GmailIcon />}
        serviceName="Gmail"
      />
      <CanvasNode
        name="Send text message"
        subtitle="sendMessage: message"
        status="success"
        serviceIcon={<TelegramIcon />}
        serviceName="Telegram"
      />
      <CanvasNode
        name="Create a card"
        subtitle="create: card"
        status="issues"
        serviceIcon={<TrelloIcon />}
        serviceName="Trello"
      />
      <CanvasNode
        name="Crawl a website"
        subtitle="crawl: website"
        status="deactivated"
        serviceIcon={<FirecrawlIcon />}
        serviceName="Firecrawl"
      />
    </div>
  );
}

export default App;
