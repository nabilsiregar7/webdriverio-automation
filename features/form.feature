Feature: Dashboard User Form

  Scenario Outline: As an admin, I can verify all user data already matched

    Given I am on the Dashboard page
      When I see User Transaction Table
    Then I can see ID <id> Username <user> Source Bank <source_bank> Destination Bank <dest_bank> and Amount <amount>

    Examples:
      | id  | usern   | source_bank | dest_bank | amount        |
      | 011 | Smith   | BCA         | BRI       | Rp 1,000,000  |
      | 100 | John    | BRI         | BCA       | Rp 1,000,000  |
      | 101 | Fulan   | Mandiri     | BCA       | Rp 4,333,011  |
      | 110 | Sri     | BNI         | BSI       | Rp 3,000,000  |
      | 111 | Bambang | BCA         | BSI       | Rp 1,500,000  |