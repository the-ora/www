import {
  Shield,
  Layers,
  Command,
  Zap,
  Eye,
  Grid3x3,
  RotateCcw,
  Code,
  Search,
  PanelLeft,
  Split,
  GitBranch,
} from "lucide-react";

const features = [
  {
    title: "Vertical Tabs",
    description:
      "Elegant sidebar navigation with vertical tabs for better screen real estate usage and organization.",
    icon: PanelLeft,
  },
  {
    title: "Built-in Ad Blocker",
    description:
      "Privacy-first browsing with integrated content blocking for ads and tracking prevention.",
    icon: Shield,
  },
  {
    title: "Tab Containers",
    description:
      "Organize tabs in spaces with support for pinning, reordering, and floating tab switcher.",
    icon: Layers,
  },
  {
    title: "Split View",
    description:
      "View multiple tabs side-by-side for enhanced productivity and multitasking.",
    icon: Split,
  },
  {
    title: "Lightning Fast",
    description:
      "Native performance powered by WebKit with SwiftUI for a blazing fast experience.",
    icon: Zap,
  },
  {
    title: "Session Restore",
    description:
      "Automatic session saving and restoration after app restart or unexpected crashes.",
    icon: RotateCcw,
  },
  {
    title: "Picture in Picture",
    description:
      "Watch videos in a floating window while browsing other tabs or using other apps.",
    icon: Eye,
  },
  {
    title: "Developer Tools",
    description:
      "Full web inspector and developer console for debugging and web development.",
    icon: Code,
  },
  {
    title: "Quick Launcher",
    description:
      "Instant navigation and search with keyboard shortcuts for power users.",
    icon: Command,
  },
  {
    title: "Multiple Search Engines",
    description:
      "Choose your preferred search engine with support for custom search providers.",
    icon: Search,
  },
  {
    title: "Keyboard First",
    description:
      "Comprehensive keyboard shortcuts for navigation, tabs, and common actions.",
    icon: Grid3x3,
  },
  {
    title: "Open Source",
    description:
      "MIT licensed and open for contributions. Built by the community, for the community.",
    icon: GitBranch,
  },
];

export function Features() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4">
            Features that matter
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built with native macOS technologies for the best possible
            experience. No unnecessary features, just what you need for focused
            browsing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:bg-card/80 hover:border-border transition-all duration-300"
            >
              <div className="mb-4">
                <feature.icon className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            And many more features coming in the beta release...
          </p>
          <a
            href="https://github.com/the-ora/browser"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <GitBranch className="w-4 h-4" />
            <span className="font-medium">View on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
