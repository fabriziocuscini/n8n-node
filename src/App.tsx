import { CanvasNode, GmailIcon, TelegramIcon, TrelloIcon, FirecrawlIcon } from './components';
import { mockNodes } from './data/mock-nodes';

/**
 * App - Main application component
 *
 * Renders a horizontal stack of workflow nodes demonstrating different
 * states and service integrations. Uses mock data to showcase the
 * component system with various node statuses and service icons.
 */
function App() {
  // Map service icon names to components
  const serviceIcons = {
    n8n: undefined, // Uses default N8nIcon
    gmail: <GmailIcon />,
    telegram: <TelegramIcon />,
    trello: <TrelloIcon />,
    firecrawl: <FirecrawlIcon />,
  };

  return (
    <div className="nodeStack">
      {mockNodes.map((node, index) => (
        <CanvasNode
          key={`${node.serviceName}-${index}`}
          name={node.name}
          subtitle={node.subtitle}
          status={node.status}
          serviceName={node.serviceName}
          serviceIcon={serviceIcons[node.serviceIconName]}
        />
      ))}
    </div>
  );
}

export default App;
