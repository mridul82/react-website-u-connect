# 📘 Project Documentation

## 🛠 Project Status: Enhancement in Progress

This documentation outlines the **new features** and **corrections** being added to the existing project related to the **Subscription Fee Coupon System**.

---

## 🔄 Summary of Enhancements

The following updates are planned:

### ✅ 1. Admin Coupon Generation (via Backend)

- The **Admin** can now **record receipt of a subscription fee** of ₹75 from the backend panel.
- Upon successful entry, the system **generates a coupon**.
- The **coupon** will appear under the **Teacher Dashboard** in the **Coupon** tab.

### 🎓 2. Teacher Coupon Distribution

- Teachers can **issue coupons** to students:
  - **Online** (through their dashboard)
  - **Manually** (offline)

> Note: Only **online-issued coupons** will appear in the **Student Dashboard**.

### 👨‍🎓 3. Student Dashboard – Coupon View

- Students will see **only online-issued coupons** under their **Coupon tab** in the dashboard.

### 🛒 4. Cart Coupon Application Logic

- When a coupon is applied in the cart:
  - The **final cart amount becomes ₹0** if the coupon provides 100% discount.
  - The **coupon is deactivated** immediately after successful usage (one-time use).

### 🏷️ 5. Coupon Categories and Discount Logic

Coupons are categorized based on their source and purpose:

| Coupon Type               | Discount Applied          | Final Cart Action              |
|---------------------------|---------------------------|---------------------------------|
| **Referral from Teacher** | 100%                      | Cart total becomes ₹0          |
| **Custom Coupons**        | Admin-defined discount %  | Cart amount reduced accordingly |

- The system checks the **coupon type** before applying the discount.
- **Custom coupons** offer **partial discounts** and the remaining amount is payable by the student.

---

## ⚙️ Workflow Overview

```plaintext
[Admin Panel]
   │
   └──→ Receives ₹75 → Generates Coupon
                     │
                     └──→ Appears in Teacher Dashboard
                                   │
        ┌──────────────────────────┘
        │
   [Teacher Panel]
        │
        └──→ Issues Coupon → (Online / Manual)
                          │
                          └──→ Appears in Student Dashboard (if online)
                                            │
                                        [Student Cart]
                                            │
                                            └──→ Applies Coupon
                                                      ↓
                                         Final amount adjusted
                                         Coupon becomes inactive

```
