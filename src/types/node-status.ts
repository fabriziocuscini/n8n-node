/**
 * Represents the possible status of a node in a workflow.
 *
 * - `active`: Default state, node is ready to execute
 * - `pinned`: Node is pinned and its data is available for testing purposes
 * - `success`: Node executed successfully and its data is available for the next node
 * - `issues`: Node encountered errors or warnings and its data is not available for the next node
 * - `deactivated`: Node is disabled and won't execute
 */
export type NodeStatus = 'active' | 'pinned' | 'success' | 'issues' | 'deactivated';
