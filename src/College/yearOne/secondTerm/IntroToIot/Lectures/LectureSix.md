---
title: Lecture 6
prev:
  text: Lecture Five
  link: /College/yearOne/secondTerm/IntroToIot/Lectures/LectureFive
next: false
#   text: Lecture Seven
#   link: /College/yearOne/secondTerm/IntroToIot/Lectures/LectureSeven
---

# Introduction to IoT - Lecture 6: IoT Communication Models and Levels

## IoT Communication Models

IoT communication models define how devices in a network exchange data. Common models include:

- **Request-Response**
- **Publish-Subscribe**
- **Push-Pull**
- **Exclusive Pair**

## Request-Response Communication Model

- In this model, the **client sends a request** to the **server**, and the server processes it and sends back a response.
- Common in REST APIs and web-based applications.
- Server fetches data, prepares a response, and returns it to the client.

![](../imgs/figure%201.png)

## Publish-Subscribe Communication Model

- Involves **publishers**, **brokers**, and **subscribers**.
- **Publishers** send data to **topics** managed by a **broker**.
- **Subscribers** subscribe to these topics and receive data when published.
- Publisher and subscriber are decoupled.

![](../imgs/figure-1%201.png)

## Push-Pull Communication Model

- **Producers push** data to **queues**.
- **Consumers pull** data from these queues.
- Producers and consumers are decoupled.
- **Queues buffer** messages and handle mismatched data rates.

![](../imgs/figure-2%201.png)

## Exclusive Pair Communication Model

- **Bidirectional, full-duplex** model with a persistent connection between client and server.
- Once connected, both ends can exchange messages.
- Connection remains open until explicitly closed.

![](../imgs/figure-3%201.png)

## IoT Levels & Deployment Templates

IoT systems generally consist of:

- Device
- Resource
- Controller Service
- Database
- Web Service
- Analysis Component
- Application

### IoT Level-1 System

- Single device/node handles **sensing, storage, analysis**, and application.
- Ideal for **low-cost, low-complexity** systems with **limited data**.

### IoT Level-2 System

- Single device performs sensing and local analysis.
- Data is stored in the **cloud**, and the **application is cloud-based**.
- Suitable for systems with **large data** but **non-intensive** analysis.

### IoT Level-3 System

- Single device with **cloud-based storage, analysis, and application**.
- Designed for **large data and intensive** computational needs.

### IoT Level-4 System

- **Multiple nodes** perform local analysis.
- Data is sent to the cloud; observers (local/cloud) can subscribe to updates.
- Suitable for **complex, multi-node systems** with heavy data and analysis needs.

### IoT Level-5 System

- **Multiple end nodes** + one **coordinator node**.
- End nodes sense data; coordinator aggregates and sends it to the cloud.
- Ideal for **wireless sensor networks** with **complex analytics**.

### IoT Level-6 System

- **Multiple independent end nodes** send data directly to the cloud.
- Cloud handles **storage, analytics**, and **visualization**.
- Central controller manages node status and control commands.

## Web Services

- A **web service** is a software interface accessible over the internet.
- Uses **standard formats** (like XML or JSON) to send/receive API data.

## Amazon Web Services (AWS)

- A suite of **cloud computing services** by Amazon.
- AWS is spread across **9 global regions**, each with multiple **Availability Zones**.
- Offers services for computing, storage, databases, networking, and more.

[Website](http://aws.amazon.com)

## Amazon Web Services for IoT

AWS provides various services for implementing scalable IoT systems:

- **EC2**
- **AutoScaling**
- **S3**
- **RDS**
- **DynamoDB**

### Amazon EC2

- **Infrastructure-as-a-Service (IaaS)** for scalable virtual computing.
- Allows launching virtual machines for IoT apps.

#### EC2 Python Example

```python
# Python program for launching an EC2 instance
import boto.ec2
from time import sleep

ACCESS_KEY="<center access key>"
SECRET_KEY="<center secret key>"

REGION="us-east-1"
AMI_ID = "ami-d0f5bfb9"
EC2_KEY_HANDLE = "<enter key handle>"
INSTANCE_TYPE = "t1.micro"
SECGROUP_HANDLE = "default"

conn = boto.ec2.connect_to_region(
  REGION, aws_access_key_id=ACCESS_KEY,
  aws_secret_access_key=SECRET_KEY
)

reservation = conn.run_instances(
  image_id=AMI_ID, key_name=EC2_KEY_HANDLE,
  instance_type=INSTANCE_TYPE,
  security_groups=[SECGROUP_HANDLE, ]
)
```

---

### Amazon S3

- Scalable **cloud storage** for raw IoT data.
- Stores sensor data, logs, multimedia, etc.
- Reliable and redundant infrastructure.

---

### Amazon Auto Scaling

- Automatically adjusts the number of EC2 instances.
- **Vertical scaling**: Upgrading resources.
- **Horizontal scaling**: Adding more nodes.
- Useful for dynamic scaling of IoT platforms.

---

### Amazon RDS

- Cloud-based **relational database** service (MySQL, Oracle, etc.).
- Provides **scalable, managed SQL databases**.
- Ideal for structured IoT data storage.

---

### Amazon DynamoDB

- **NoSQL**, fully managed, high-performance database.
- Designed to handle **massive data volume** and **real-time access**.
- Great for unstructured IoT data.

## AWS Core Services by Category

### Compute

- **Amazon EC2**
- **AWS Lambda**
- **Auto Scaling**
- **AWS Elastic Beanstalk**
- **Amazon ECS / ECR**
- **Amazon Lightsail**
- **AWS Batch**

### Networking

- **Amazon VPC**
- **Amazon Route 53**
- **AWS Direct Connect**
- **Elastic Load Balancing**

### Storage

- **Amazon S3**
- **Amazon EBS**
- **Amazon CloudFront**
- **Amazon Glacier**
- **Amazon EFS**
- **AWS Snowball**
- **Storage Gateway**
- **AWS Snowmobile**

### Database

- **Amazon RDS**
- **Amazon DynamoDB**
- **Amazon Redshift**
- **AWS Database Migration Service**
- **Amazon ElastiCache**
