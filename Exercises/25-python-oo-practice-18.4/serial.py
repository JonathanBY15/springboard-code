"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start):
        """Initialize generator with start number."""
        self.start = start
        self.current = start
    
    def generate(self):
        """Return current number and increment."""
        self.current += 1
        return self.current - 1
    
    def reset(self):
        """Reset number to the start number."""
        self.current = self.start