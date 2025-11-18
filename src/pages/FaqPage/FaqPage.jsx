import './FaqPage.css'

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export function FaqPage() {
  return (
   <Accordion.Root type="single" collapsible className="accordion-root">
  {/* Item 1 */}
  <Accordion.Item value="item-1" className="accordion-item">
    <Accordion.Header>
      <Accordion.Trigger className="accordion-trigger">
        What is NewsPortal?
        <ChevronDown className="accordion-icon" />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="accordion-content">
      NewsPortal is an online platform providing the latest headlines, articles, and multimedia from around the world.
    </Accordion.Content>
  </Accordion.Item>

  {/* Item 2 */}
  <Accordion.Item value="item-2" className="accordion-item">
    <Accordion.Header>
      <Accordion.Trigger className="accordion-trigger">
        How can I subscribe to updates?
        <ChevronDown className="accordion-icon" />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="accordion-content">
      You can subscribe via email or push notifications by clicking the “Subscribe” button on the homepage.
    </Accordion.Content>
  </Accordion.Item>

  {/* Item 3 */}
  <Accordion.Item value="item-3" className="accordion-item">
    <Accordion.Header>
      <Accordion.Trigger className="accordion-trigger">
        Can I submit my own articles?
        <ChevronDown className="accordion-icon" />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="accordion-content">
      Yes! You can apply to become a contributor through our “Write for Us” section.
    </Accordion.Content>
  </Accordion.Item>

  {/* Item 4 */}
  <Accordion.Item value="item-4" className="accordion-item">
    <Accordion.Header>
      <Accordion.Trigger className="accordion-trigger">
        How often is content updated?
        <ChevronDown className="accordion-icon" />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="accordion-content">
      We update news articles throughout the day, with breaking news posted immediately.
    </Accordion.Content>
  </Accordion.Item>

  {/* Item 5 */}
  <Accordion.Item value="item-5" className="accordion-item">
    <Accordion.Header>
      <Accordion.Trigger className="accordion-trigger">
        Is my data safe?
        <ChevronDown className="accordion-icon" />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="accordion-content">
      Absolutely. We follow strict privacy policies and never sell your personal information.
    </Accordion.Content>
  </Accordion.Item>

  {/* Item 6 */}
  <Accordion.Item value="item-6" className="accordion-item">
    <Accordion.Header>
      <Accordion.Trigger className="accordion-trigger">
        Can I read articles offline?
        <ChevronDown className="accordion-icon" />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="accordion-content">
      Yes, you can save articles to your account or use our mobile app to read offline.
    </Accordion.Content>
  </Accordion.Item>

  {/* Item 7 */}
  <Accordion.Item value="item-7" className="accordion-item">
    <Accordion.Header>
      <Accordion.Trigger className="accordion-trigger">
        How do I report an error in an article?
        <ChevronDown className="accordion-icon" />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="accordion-content">
      Click the “Report Issue” button at the bottom of the article to notify our editorial team.
    </Accordion.Content>
  </Accordion.Item>

  {/* Item 8 */}
  <Accordion.Item value="item-8" className="accordion-item">
    <Accordion.Header>
      <Accordion.Trigger className="accordion-trigger">
        Can I personalize my news feed?
        <ChevronDown className="accordion-icon" />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="accordion-content">
      Yes, you can select preferred categories and topics in your account settings.
    </Accordion.Content>
  </Accordion.Item>

  {/* Item 9 */}
  <Accordion.Item value="item-9" className="accordion-item">
    <Accordion.Header>
      <Accordion.Trigger className="accordion-trigger">
        Do you have a mobile app?
        <ChevronDown className="accordion-icon" />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="accordion-content">
      Yes, our app is available on iOS and Android for reading, saving, and sharing articles.
    </Accordion.Content>
  </Accordion.Item>

  {/* Item 10 */}
  <Accordion.Item value="item-10" className="accordion-item">
    <Accordion.Header>
      <Accordion.Trigger className="accordion-trigger">
        Is Radix suitable for this site?
        <ChevronDown className="accordion-icon" />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="accordion-content">
      Yes, Radix UI is accessible, flexible, and works seamlessly for smooth interactions.
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>  
  );
}
