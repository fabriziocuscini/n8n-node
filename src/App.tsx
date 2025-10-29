import { CanvasNode, GmailIcon, TelegramIcon, TrelloIcon, FirecrawlIcon } from './components';

function App() {
  return (
    <div className="nodeStack">
      <CanvasNode
        name="Get many messages"
        subtitle="getAll: message"
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
        name="Get many messages"
        subtitle="getAll: message"
        status="success"
        serviceIcon={<TelegramIcon />}
        serviceName="Telegram"
      />
      <CanvasNode
        name="Get many messages"
        subtitle="getAll: message"
        status="issues"
        serviceIcon={<TrelloIcon />}
        serviceName="Trello"
      />
      <CanvasNode
        name="Get many messages"
        subtitle="getAll: message"
        status="deactivated"
        serviceIcon={<FirecrawlIcon />}
        serviceName="Firecrawl"
      />
    </div>
  );
}

export default App;
