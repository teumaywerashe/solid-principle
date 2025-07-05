
# SOLID Refactoring

## Violated Principles in the Original Code
1. Single Responsibility Principle (SRP) - Notification did everything.
2. Open/Closed Principle (OCP) - Adding channels required modifying send().
3. Liskov Substitution Principle (LSP) - Subtypes couldn't cleanly override send().
4. Interface Segregation Principle (ISP) - Clients needed to provide irrelevant parameters.
5. Dependency Inversion Principle (DIP) - No abstraction layer; Notification depended on low-level details.

## Refactoring
Implemented NotificationChannel abstraction and separate channel classes to satisfy SOLID principles.
