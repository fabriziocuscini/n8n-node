import { CanvasNode, GmailIcon, TelegramIcon, TrelloIcon, FirecrawlIcon } from './components';

function App() {
  return (
    <div className="nodeStack">
      <CanvasNode name="Get many messages" subtitle="getAll: message" status="active" />
      <CanvasNode
        name="Get many messages"
        subtitle="getAll: message"
        status="pinned"
        serviceIcon={<GmailIcon />}
      />
      <CanvasNode
        name="Get many messages"
        subtitle="getAll: message"
        status="success"
        serviceIcon={<TelegramIcon />}
      />
      <CanvasNode
        name="Get many messages"
        subtitle="getAll: message"
        status="issues"
        serviceIcon={<TrelloIcon />}
      />
      <CanvasNode
        name="Get many messages"
        subtitle="getAll: message"
        status="deactivated"
        serviceIcon={<FirecrawlIcon />}
      />
    </div>
  );
}

export default App;
