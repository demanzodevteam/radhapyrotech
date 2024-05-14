"use client";
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { formatDate } from "@/services/dateFormatter/dateformatter";

const PdfInvoice = ({ order }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Invoice</Text>
      </View>
      <View style={styles.customerInfoContainer}>
        <View style={styles.customerInfo}>
          <Text style={styles.customerName}>{order.customer_name}</Text>
          <Text style={styles.addressHeading}>Address:</Text>
          <Text style={styles.text}>{order.customer_address}</Text>
          <Text style={styles.text}>{order.landmark}</Text>
          <Text
            style={styles.text}
          >{`${order.customer_city} - ${order.customer_pincode}`}</Text>
          <Text style={styles.text}>{order.customers_state}</Text>
          <Text style={styles.text}>{`Phone: ${order.customer_phone}`}</Text>
          <Text style={styles.text}>{`Email: ${order.customer_Email}`}</Text>
        </View>
        <View style={styles.invoiceInfo}>
          <Text style={styles.text}>{`Invoice No.: ${order.id}`}</Text>
          <Text style={styles.text}>{`Order Date: ${formatDate(
            order.order_date
          )}`}</Text>
          <Text style={styles.text}>{`Invoice Date: ${formatDate(
            Date.now()
          )}`}</Text>
        </View>
      </View>
      <View style={styles.products}>
        <Text style={styles.productsHeading}>Products</Text>
        <View style={styles.productTable}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>S No.</Text>
            <Text style={styles.tableHeader}>Product Code</Text>
            <Text style={styles.tableHeader}>Product Name</Text>
            <Text style={styles.tableHeader}>Individual Price</Text>
            <Text style={styles.tableHeader}>Quantity</Text>
            <Text style={styles.tableHeader}>Total Price</Text>
          </View>
          {order.ordered_products?.map((product, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableData}>{index + 1}</Text>
              <Text style={styles.tableData}>{product?.product_code}</Text>
              <Text style={styles.tableData}>{product?.product_name}</Text>
              <Text style={styles.tableData}>
                {product?.product_selling_price}
              </Text>
              <Text style={styles.tableData}>{product?.quantity}</Text>
              <Text style={styles.tableData}>
                {Number(product?.quantity) *
                  Number(product?.product_selling_price)}
              </Text>
            </View>
          ))}
        </View>
        <Text style={styles.totalPrice}>Total Price: {order.total_price}</Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  customerInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  customerInfo: {
    width: "50%",
  },
  customerName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 10,
    marginBottom: 4,
  },
  addressHeading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  invoiceInfo: {
    width: "30%",
  },
  products: {
    marginBottom: 20,
  },
  productsHeading: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productTable: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid #000",
  },
  tableHeader: {
    flex: 1,
    padding: 5,
    fontWeight: "bold",
    fontSize: "11px",
  },
  tableData: {
    flex: 1,
    padding: 15,
    fontSize: "11px",
  },
  totalPrice: {
    marginTop: 20,
    textAlign: "right",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default PdfInvoice;
