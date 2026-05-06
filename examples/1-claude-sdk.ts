/**
 * Example: Use RapidRMS Connector with Claude SDK directly
 */

import Anthropic from '@anthropic-ai/sdk';
import { allTools, allExecutors, executeTool } from '@rapidrms/connector';

const client = new Anthropic();

async function main() {
  console.log('Starting RapidRMS + Claude SDK conversation...\n');

  const messages: Anthropic.Messages.MessageParam[] = [
    {
      role: 'user',
      content: 'What was our total revenue last month?',
    },
  ];

  // Initial request with tools
  let response = await client.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    tools: allTools as any[],
    messages,
  });

  console.log('Claude:', response.content);

  // Tool loop
  while (response.stop_reason === 'tool_use') {
    const toolUseBlocks = response.content.filter(
      (block): block is Anthropic.Messages.ToolUseBlock => block.type === 'tool_use',
    );

    const toolResults: Anthropic.Messages.ToolResultBlockParam[] = [];

    for (const toolUse of toolUseBlocks) {
      console.log(`\nExecuting tool: ${toolUse.name}`);

      const result = await executeTool(toolUse.name, toolUse.input);

      toolResults.push({
        type: 'tool_result',
        tool_use_id: toolUse.id,
        content: result.content,
      });
    }

    // Add assistant response and tool results to messages
    messages.push({
      role: 'assistant',
      content: response.content,
    });

    messages.push({
      role: 'user',
      content: toolResults,
    });

    // Continue conversation
    response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      tools: allTools as any[],
      messages,
    });

    console.log('Claude:', response.content);
  }

  console.log('\nConversation complete!');
}

main().catch(console.error);
