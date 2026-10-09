export interface EngineeringLaw {
  number: string;
  title: string;
  summary: string;
  elaboration: string;
}

export interface DsaPattern {
  number: string;
  name: string;
  category: "core" | "concurrency" | "dp-graph";
  invariant: string;
  exemplars: string;
  complexity: string;
}

export const engineeringLaws: EngineeringLaw[] = [
  {
    number: "Law 01",
    title: "Idempotency is Non-Negotiable",
    summary: "Every mutation API must handle network retries safely with zero duplicate side effects.",
    elaboration:
      "When a client drops its connection midway through a financial deduction or checkout transaction, it will inevitably retry. If the server does not enforce atomic check-and-set idempotency keys, duplicate ledger entries and double-spending occur. An API mutation is only complete when an identical request yields an identical result.",
  },
  {
    number: "Law 02",
    title: "Index with Intent (B+ Trees)",
    summary: "Indexes are not magic; structure composite columns following Equality First, Range Second.",
    elaboration:
      "Understanding the mechanical reality of B+ Trees is essential. A multi-column index on (status, created_at) enables lightning-fast range scans only because status equality narrows the tree path before created_at interval traversal. Omitting the leftmost prefix forces a full sequential scan regardless of table size.",
  },
  {
    number: "Law 03",
    title: "Decouple by Failure Domain",
    summary: "Never run long-running I/O or background jobs inside web request-response loops.",
    elaboration:
      "If an API worker pod restarts or crashes during deployment, any asynchronous in-memory background task dies with it. Heavy compute, media transcoding, and external third-party webhooks belong in durable, ACK-driven queues (RabbitMQ/Celery) running on isolated worker pools.",
  },
  {
    number: "Law 04",
    title: "Test Concurrency Boundaries",
    summary: "Single-threaded unit tests only prove happy paths; simulate race conditions under load.",
    elaboration:
      "Real software does not fail on sunny days; it fails when 50 concurrent threads contest the exact same database row during a flash sale. Automated test suites must explicitly verify deadlock prevention, row-level locking behavior (SELECT FOR UPDATE), and graceful degradation under traffic bursts.",
  },
];

export const dsaPatterns: DsaPattern[] = [
  {
    number: "01",
    name: "Two Pointers",
    category: "core",
    invariant: "Maintain converging or fast-slow pointer invariants to eliminate nested loops in sorted sequences.",
    exemplars: "LC 11 (Container), LC 15 (3Sum), LC 42 (Trapping Rain Water)",
    complexity: "O(N) Time · O(1) Space",
  },
  {
    number: "02",
    name: "Sliding Window",
    category: "core",
    invariant: "Expand right pointer to satisfy constraint; contract left pointer monotonically to restore validity.",
    exemplars: "LC 3 (Longest Substring), LC 76 (Min Window Substring), LC 424",
    complexity: "O(N) Time · O(K) Space",
  },
  {
    number: "03",
    name: "Fast & Slow Pointers",
    category: "concurrency",
    invariant: "Floyd's cycle detection (1x and 2x velocities) to detect loops and find cycle entry points.",
    exemplars: "LC 141 (Linked List Cycle), LC 142 (Cycle II), LC 287 (Duplicate Number)",
    complexity: "O(N) Time · O(1) Space",
  },
  {
    number: "04",
    name: "Prefix Sum & Hash Map",
    category: "core",
    invariant: "Converts range sum queries to O(1); finds subarray sum == K even when negative values prevent sliding windows.",
    exemplars: "LC 560 (Subarray Sum Equals K), LC 525 (Contiguous Array), LC 974",
    complexity: "O(N) Time · O(N) Space",
  },
  {
    number: "05",
    name: "Monotonic Stack / Queue",
    category: "concurrency",
    invariant: "Maintains strictly ordered elements to discover the Next Greater or Smaller Element in amortized linear time.",
    exemplars: "LC 739 (Daily Temperatures), LC 84 (Largest Rectangle in Histogram), LC 85",
    complexity: "O(N) Time · O(N) Space",
  },
  {
    number: "06",
    name: "Merge Intervals",
    category: "core",
    invariant: "Sort by interval start time; merge overlaps when curr.start <= prev.end to resolve schedule conflicts.",
    exemplars: "LC 56 (Merge Intervals), LC 57 (Insert Interval), LC 253 (Meeting Rooms II)",
    complexity: "O(N log N) Time · O(N) Space",
  },
  {
    number: "07",
    name: "Binary Search on Answer",
    category: "core",
    invariant: "When feasibility check is monotonic (True...True, False...False), binary search the answer domain directly.",
    exemplars: "LC 875 (Koko Eating Bananas), LC 1011 (Capacity To Ship), LC 410 (Split Array)",
    complexity: "O(N log(Range)) Time · O(1) Space",
  },
  {
    number: "08",
    name: "Top 'K' Elements (Heaps)",
    category: "concurrency",
    invariant: "Maintain a bounded Min-Heap of size K to identify top elements in O(N log K) without sorting the full array.",
    exemplars: "LC 215 (Kth Largest Element), LC 347 (Top K Frequent Elements), LC 373",
    complexity: "O(N log K) Time · O(K) Space",
  },
  {
    number: "09",
    name: "Two Heaps (Running Median)",
    category: "concurrency",
    invariant: "Balance Max-Heap (lower half) and Min-Heap (upper half) to extract rolling streaming medians in O(1) time.",
    exemplars: "LC 295 (Find Median from Data Stream), LC 480 (Sliding Window Median)",
    complexity: "O(log N) Insert · O(1) Median",
  },
  {
    number: "10",
    name: "BFS & Multi-Source BFS",
    category: "dp-graph",
    invariant: "Level-order FIFO queue exploration guaranteed to find unweighted shortest paths and simultaneous wavefronts.",
    exemplars: "LC 102 (Level Order), LC 994 (Rotting Oranges), LC 127 (Word Ladder)",
    complexity: "O(V + E) Time · O(V) Space",
  },
  {
    number: "11",
    name: "DFS & Tree Traversals",
    category: "dp-graph",
    invariant: "Recursive stack propagation to evaluate tree heights, path sums, LCA, and subtree topological properties.",
    exemplars: "LC 104 (Max Depth), LC 124 (Binary Tree Max Path Sum), LC 236 (Lowest Common Ancestor)",
    complexity: "O(V + E) Time · O(H) Space",
  },
  {
    number: "12",
    name: "Backtracking & Pruning",
    category: "dp-graph",
    invariant: "State-space exploration with aggressive constraint pruning to discard invalid search subtrees early.",
    exemplars: "LC 79 (Word Search), LC 51 (N-Queens), LC 39 (Combination Sum)",
    complexity: "O(K^N) Exponential · O(N) Space",
  },
  {
    number: "13",
    name: "2D Matrix / Grid Traversal",
    category: "dp-graph",
    invariant: "Treat 2D coordinates (r, c) as implicit graph nodes with 4-directional boundary checks and visited masks.",
    exemplars: "LC 200 (Number of Islands), LC 695 (Max Area of Island), LC 417 (Pacific Atlantic)",
    complexity: "O(R × C) Time · O(R × C) Space",
  },
  {
    number: "14",
    name: "Topological Sort (DAG)",
    category: "dp-graph",
    invariant: "Kahn’s In-Degree algorithm to resolve build orders, dependency graphs, and detect deadlocks in DAGs.",
    exemplars: "LC 207 (Course Schedule), LC 210 (Course Schedule II), LC 269 (Alien Dictionary)",
    complexity: "O(V + E) Time · O(V) Space",
  },
  {
    number: "15",
    name: "Union-Find (DSU)",
    category: "dp-graph",
    invariant: "Near O(1) amortized disjoint set connectivity using Path Compression and Union by Rank.",
    exemplars: "LC 684 (Redundant Connection), LC 128 (Longest Consecutive Sequence), LC 261",
    complexity: "O(α(N)) Time · O(N) Space",
  },
  {
    number: "16",
    name: "Dynamic Programming (1D, 2D)",
    category: "dp-graph",
    invariant: "Deconstruct problems into optimal substructures with overlapping subproblems, memoizing states.",
    exemplars: "LC 300 (Longest Increasing Subsequence), LC 1143 (LCS), LC 322 (Coin Change)",
    complexity: "O(N²) or O(N×W) Time · O(N) Space",
  },
];

export const deepWorkRitual = {
  title: "The 9 PM – 12 AM Night Shift Ritual",
  quote:
    "Consistency compounds faster than occasional heroic bursts. A quiet 3-hour daily block with zero phone notifications built the foundation of my engineering discipline.",
  steps: [
    {
      time: "21:00 — 22:30 (90 mins)",
      focus: "High Friction Problem Solving",
      details: "Two medium/hard algorithmic problems under strict timed conditions focusing on invariants.",
    },
    {
      time: "22:30 — 23:30 (60 mins)",
      focus: "Applied Systems & Internals",
      details: "Database locking, B+ Tree mechanics, Linux socket debugging, or high-throughput async queues.",
    },
    {
      time: "23:30 — 00:00 (30 mins)",
      focus: "Synthesis & Reflection",
      details: "Documenting invariants learned, writing clean notes, updating mental models, and resting.",
    },
  ],
  books: [
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      lesson: "Partitioning, replication, distributed consensus, and the reality of unreliable networks.",
    },
    {
      title: "Operating Systems: Three Easy Pieces",
      author: "Remzi H. Arpaci-Dusseau & Andrea C. Arpaci-Dusseau",
      lesson: "Virtualization, concurrency primitives (locks, condition variables, semaphores), and persistent storage.",
    },
    {
      title: "Database Internals",
      author: "Alex Petrov",
      lesson: "B-Tree node splits, Write-Ahead Logging (WAL), LSM trees, and concurrency control algorithms.",
    },
  ],
};
